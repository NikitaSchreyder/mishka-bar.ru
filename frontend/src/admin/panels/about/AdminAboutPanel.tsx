import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { Image } from 'antd'
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
  const [aboutImage, setAboutImage] = useState()
  const fileInputRef = createRef<HTMLInputElement>()

  const mapState: ymaps.IMapState = { center: [61.258612, 73.403110], zoom: 17 }

  const {description, thumbUrl} = aboutData

  useEffect(() => {
    axiosApi().get('/about')
      .then(data => setAboutData(data.data))
  }, [])

  const updatePhoto = (file: any) => {
    const formdata = new FormData()
    formdata.append('photo', file)
    axiosApi(token).put('/about', formdata)
      .then(() => {
        axiosApi().get('/about')
          .then(data => setAboutData(data.data))
      })
  }

  const updateDescription = (text: string) => {
    const formdata = new FormData()
    formdata.append('description', text)
    axiosApi(token).put('/about', formdata)
      .then(() => {
        // axiosApi().get('/about')
        //   .then(data => setAboutData(data.data))
      })
  }


  return (
    <div style={{paddingTop: 50}}>
      <div className="layout_container">
        <div className="about-content">
          <Image style={{cursor: 'pointer'}} onClick={() => fileInputRef.current?.click()} alt='Фото зала' className='about-img' preview={false} src={thumbUrl} />
          <input onChange={e => updatePhoto(e.currentTarget.files?.item(0))} ref={fileInputRef} type="file" style={{display: 'none'}} />
          <p contentEditable onBlur={e => updateDescription(e.currentTarget.textContent as string)} className="about-description">{description}</p>
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