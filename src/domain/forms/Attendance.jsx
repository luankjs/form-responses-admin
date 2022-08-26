import React, { useEffect, useState } from 'react'
import { DateTime } from 'luxon'

import TableList from '../../components/TableList'
import Panel from '../../components/Panel'
import api from '../../services/api'

const Attendance = () => {
  const [selectedResponse, setSelectedResponse] = useState(null)
  const [items, setItems] = useState([])
  const fieldsTable = [
    { name: 'name', label: 'Nome', main: true },
    {
      name: 'created',
      label: 'Enviando em',
      format: (value) => DateTime.fromISO(value).toFormat('dd/MM/yyyy HH:mm')
    }
  ]
  const fieldsPanel = [
    { name: 'name', label: 'Nome' },
    { name: 'email', label: 'E-mail' },
    { name: 'comunication', label: 'Comunicação' },
    { name: 'phone', label: 'Telefone' },
    { name: 'deadline', label: 'Deadline' },
    { name: 'solicitation', label: 'Solicitação' },
    {
      name: 'created',
      label: 'Enviando em',
      format: (value) => DateTime.fromISO(value).toFormat('dd/MM/yyyy HH:mm')
    }
  ]
  // const items = [
  //   {
  //     id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  //     name: 'Iramar Ferreira dos Santos',
  //     email: 'iramarbsi@gmail.com',
  //     comunication: 'rerea',
  //     phone: '84996135045',
  //     deadline: '25/08/2022',
  //     solicitation: 'Entrevista com Ministro',
  //     created: '2022-08-25T11:03:15.432Z'
  //   },
  //   {
  //     id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  //     name: 'Iramar Ferreira dos Santos',
  //     email: 'iramarbsi@gmail.com',
  //     comunication: 'rerea',
  //     phone: '84996135045',
  //     deadline: '25/08/2022',
  //     solicitation: 'Dados estatísticos',
  //     created: '2022-08-25T11:08:02.469Z'
  //   }
  // ]

  const onOpenResponse = (item) => {
    setSelectedResponse(item)
  }

  const onClosePanel = () => {
    setSelectedResponse(null)
  }

  // useEffect(() => {
  //   api
  //     .get('/newsletter')
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log(error))
  // }, [])
  useEffect(() => {
    console.log('You clicked times')
    api
      .get('/attendances')
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <TableList
        items={items}
        fields={fieldsTable}
        handleOpenResponse={(item) => onOpenResponse(item)}
      />
      {/* {!!selectedResponse && ( */}
      <Panel
        show={!!selectedResponse}
        item={selectedResponse}
        fields={fieldsPanel}
        title="Dados da Resposta"
        handleClosePanel={onClosePanel}
      />
      {/* )} */}
    </>
  )
}

export default Attendance
