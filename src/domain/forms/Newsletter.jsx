import React, { useEffect, useState } from 'react'
import { DateTime } from 'luxon'

import TableList from '../../components/TableList'
import Panel from '../../components/Panel'
import api from '../../services/api'

const Newsletter = () => {
  const [selectedResponse, setSelectedResponse] = useState(null)
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
    { name: 'profession', label: 'Profissão' },
    { name: 'isWhatsApp', label: 'Receber no Whatsapp?' },
    { name: 'phone', label: 'Telefone' },
    {
      name: 'created',
      label: 'Enviando em',
      format: (value) => DateTime.fromISO(value).toFormat('dd/MM/yyyy HH:mm')
    }
  ]
  const items = [
    {
      id: 'bdc04fb3-e683-4b35-b7fe-f8b2f3dae092',
      name: 'Iramar Ferreira dos Santos',
      email: 'iramarbsi@gmail.com',
      profession: 'rer',
      isWhatsApp: 'Sim',
      phone: '84996135045',
      lgpd: 'ciente',
      created: '2022-08-19T19:27:48.323'
    },
    {
      id: '9ee2ebc5-aaa5-4dad-9096-0fa7813a92d1',
      name: 'Iramar Ferreira dos Santos',
      email: 'iramarbsi@gmail.com',
      profession: 'rer',
      isWhatsApp: 'Sim',
      phone: '84996135045',
      lgpd: 'ciente',
      created: '2022-08-19T19:28:17.789'
    }
  ]

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
      .get('/newsletters')
      .then((response) => console.log(response.data))
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

export default Newsletter
