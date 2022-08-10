import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { Setlist } from 'services/api/getSetlists'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const { artistName, page } = query as unknown as {
    artistName: string
    page: number
  }

  const SETLIST_BASE_URL = 'https://api.setlist.fm/rest'

  const api = axios.create({
    baseURL: SETLIST_BASE_URL,
    headers: {
      Accept: 'application/json',
      'x-api-key': process.env.SETLIST_API_KEY as string
    }
  })

  const getSetlists = async (artistName: string, page = 1) => {
    const res = await api.get(
      `/1.0/search/setlists?artistName=${artistName}&p=${page}`
    )

    const mappedSetlists = res.data.setlist.filter(
      (s: Setlist) => s.sets.set.length > 0
    )

    return {
      ...res.data,
      setlist: mappedSetlists
    }
  }

  const response = await getSetlists(artistName, page)

  res.status(200).json(response)
}

export default handler
