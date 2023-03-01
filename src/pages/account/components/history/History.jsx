import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { bookingHistoryApi } from 'services/user'

export default function History() {
    const params = useParams()

    const [history, setHistory] = useState()

    console.log(history)
    useEffect(() => {
        getBookingtHistory()
     }, [])

    const getBookingtHistory = async () => {
        const result = await bookingHistoryApi(params.user)
        console.log(result.data.content)
        setHistory(result.data.content)
    }





  return (
    <div className="history">
    <h1>Lịch sử đặt vé</h1>
    <hr/>
  </div>
  )
}
