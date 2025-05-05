import {
    ScrollArea,
    Table,
    Text,
    Modal,
    TextInput
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
import { useCallback, useEffect, useState, useMemo } from 'react';
import { STATUS_TYPE, STATUS_CODE } from '../constants';
import StatusCellTemplate from './StatusCellTemplate';
import useHeader from '../hooks/useHeader';
import { formatTimestamp } from '../utils/formatTimestamp';
import NameManagerCellTemplate from './NameCellTemplate';

function BaseTable(props) {
    const {activeTab} = props;
    const [search, setSearch] = useState('');
    const [data, setData] = useState([])
    const [success, setSuccess] = useState(false);
    const headers = useHeader(activeTab)
    const rows = useMemo(() => {
        if (success) {
            // setSuccess(false)
            return data?.filter((item) => {
                if (activeTab === 'new') {
                    return item.status === 1
                }
                if (activeTab === 'completed') {
                    return item.status  === 2
                }

                return item
            }).map((row) => (
                <Table.Tr key={row.id}>
                  <NameManagerCellTemplate item={row} />
                  <Table.Td>{row.adresse.caption}</Table.Td>
                  <Table.Td>{formatTimestamp(row.time_create)}</Table.Td>
                  {
                    activeTab === 'all' &&
                    <StatusCellTemplate item={row} />
                  }
                </Table.Tr>
              ));
        } else {
            return []
        }
    }, [success, activeTab])

      useEffect(() => {
        fetch('http://127.0.0.1:8000/api/orders/filter/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    status: STATUS_CODE[activeTab]
             })
          })
            .then(res => res.json())
            .then(data => {
                setSuccess(true)
                setData(data)
            });
      }, [search, activeTab])
    return (
        <>
            <ScrollArea>
            <TextInput
                placeholder="Найти..."
                mb="md"
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
            />
                <Table miw={700} highlightOnHover>
                    <Table.Thead>
                        <Table.Tr>
                            {
                                headers.map((header) => (
                                    <Table.Th key={header.id}>{header.caption}</Table.Th>
                                ))
                            }
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </ScrollArea>
        </>
    )
}

export default BaseTable;