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

  const onOpenResponse = (item) => {
    setSelectedResponse(item)
  }

  const onClosePanel = () => {
    setSelectedResponse(null)
  }

  useEffect(() => {
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
      <Panel
        show={!!selectedResponse}
        item={selectedResponse}
        fields={fieldsPanel}
        title="Dados da Resposta"
        handleClosePanel={onClosePanel}
      />
    </>
  )
}

export default Attendance
