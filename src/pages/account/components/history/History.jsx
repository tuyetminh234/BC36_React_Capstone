import React, { useEffect, useState } from 'react'
import { bookingHistoryApi } from 'services/user'

export default function History() {

    const [history, setHistory] = useState({})
    useEffect(() => { }, [
        getBookingtHistory()
    ])

    const getBookingtHistory = async () => {
        const result = await bookingHistoryApi()
        console.log(result)
    }
  return (
    <div className="history">
    <h1>Lịch sử đặt vé</h1>
    <hr/>
  </div>
  )
}
