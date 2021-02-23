
import { http } from '@/lib/http/index'

export const test = async (proload) => {
  return await http.post('/test', proload)
}