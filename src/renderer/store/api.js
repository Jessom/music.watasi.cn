import axios from '@/axios'

export const get = async (url, params) => {
  try {
    const result = await axios.get(url, { params })
    if (result.code === 200) {
      return Promise.resolve(result)
    } else {
      return Promise.reject(result)
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
