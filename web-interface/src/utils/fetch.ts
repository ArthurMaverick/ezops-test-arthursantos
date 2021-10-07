import request from 'axios'

export const GET = async (url:string, data?: any) =>{
  return await request.get(url, data)

}

export const POST = async (url:string, data?: any) =>{
  const payload = await request.post(url, data)
  return payload.data
}
