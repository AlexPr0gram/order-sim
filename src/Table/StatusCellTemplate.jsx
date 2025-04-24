import {
    Table,
    Badge
  } from '@mantine/core';
import { useMemo } from 'react';
import { STATUS_TYPE } from '../constants';
function StatusCellTemplate(props) {
    const {item} = props;
    const colorBadge = useMemo(() => {
        switch (STATUS_TYPE[item.status]) {
            case 'new':
                return 'red'
            case 'completed':
                return 'teal'
            default:
                break;
        }
    })
    const statusCaption = useMemo(() => {
        switch (STATUS_TYPE[item.status]) {
            case 'new':
                return 'Новый'
            case 'completed':
                return 'Выполнен'
            default:
                break;
        }
    })
    return (
        <Table.Td>
            <Badge color={colorBadge}>{statusCaption}</Badge>
        </Table.Td>
    )
}

export default StatusCellTemplate;