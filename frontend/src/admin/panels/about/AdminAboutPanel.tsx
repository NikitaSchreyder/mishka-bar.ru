import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { Button, Image } from 'antd'
import { createRef, useEffect, useState } from 'react'
import { IAboutIndexPageProps } from '../../../about/types/types'
import { axiosApi } from '../../../core/api/AxiosApi'
import { getCookie } from '../../../core/helpers/cookies'

const AdminAboutPanel: React.FC = () => {
  const token = getCookie('token')
  const [aboutData, setAboutData] = useState<IAboutIndexPageProps>({
    description: '',
    id: '',
    thumbUrl: ''
  })
  const [saveBtnVisible, setSaveBtnVisible] = useState<boolean>(false)
  const fileInputRef = createRef<HTMLInputElement>()
  const descriptionInputRef = createRef<HTMLParagraphElement>()

  const mapState: ymaps.IMapState = { center: [61.258612, 73.403110], zoom: 17 }

  const {description, thumbUrl} = aboutData

  useEffect(() => {
    axiosApi().get('/about')
      .then(data => setAboutData(data.data))
  }, [])

  const onDescriptionChange = () => {
    if(descriptionInputRef.current?.textContent !== description) {
      setSaveBtnVisible(true)
    } else {
      setSaveBtnVisible(false )
    }
  }

  const updatePhoto = (file: any) => {
    const formdata = new FormData()
    formdata.append('photo', file)
    axiosApi(token).put('/about', formdata)
      .then(() => {
        axiosApi().get('/about')
          .then(data => setAboutData(data.data))
      })
  }

  const updateDescription = () => {
    const formdata = new FormData()
    formdata.append('description', descriptionInputRef.current?.textContent as string)
    axiosApi(token).put('/about', formdata)
      .then(() => {
        axiosApi().get('/about')
          .then(data => {setAboutData(data.data), setSaveBtnVisible(false)})
      })
  }

  // onBlur={e => updateDescription(e.currentTarget.textContent as string)}
  return (
    <div style={{paddingTop: 50}}>
      <div className="layout_container">
        <div className="about-content">
          <Image style={{cursor: 'pointer'}} onClick={() => fileInputRef.current?.click()} alt='Фото зала' className='about-img' preview={false} src={thumbUrl} />
          <input onChange={e => updatePhoto(e.currentTarget.files?.item(0))} ref={fileInputRef} type="file" style={{display: 'none'}} />
          <p ref={descriptionInputRef} onInput={onDescriptionChange} contentEditable className="about-description">{description}</p>
          <Button style={{display: saveBtnVisible ? 'block' : 'none'}} onClick={updateDescription}>Сохранить описание</Button>
        </div>
      </div>
      <div className='about_map-container'>
        <YMaps>
          <Map className='about_map' state={mapState}>
            <Placemark geometry={mapState.center} />
          </Map>
        </YMaps>  
      </div>
    </div>
  )
}
export default AdminAboutPanel