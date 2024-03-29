import { Button, Input, message } from 'antd'
import { FormEvent } from 'react'
import { axiosApi } from '../core/api/AxiosApi'
import { useRouter } from 'next/router'

const AdminLoginPage: React.FC = () => {
  const router = useRouter()
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)

    const login = formData.get('login') as string
    const password = formData.get('password') as string

    const signInData = {
      login,
      password
    }

    axiosApi().post('/admin/signin', signInData)
      .then(data => {
        document.cookie = "token=" + data.data
        router.reload()
      })
        .catch(err => console.log(err))
  }

  return (
    <form onSubmit={onSubmit}>
      <Input name='login' />
      <Input name='password' type='password' />
      <Button htmlType='submit'>Вход</Button>
    </form>
  )
}

export default AdminLoginPage