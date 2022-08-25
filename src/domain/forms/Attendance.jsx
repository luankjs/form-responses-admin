import React, {useState} from 'react'
import { DateTime } from 'luxon'

import TableList from '../../components/TableList'
import Panel from '../../components/Panel'
import api from '../../services/api'

export default function Attendance() {
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
      name: 'Luan Santos',
      email: 'luansantos@gmail.com',
      profession: 'rer',
      isWhatsApp: 'Sim',
      phone: '84996135045',
      lgpd: 'ciente',
      created: '2022-08-19T19:27:48.323'
    },
    {
      id: '9ee2ebc5-aaa5-4dad-9096-0fa7813a92d1',
      name: 'Ademir',
      email: 'ademir@gmail.com',
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
  );
}
