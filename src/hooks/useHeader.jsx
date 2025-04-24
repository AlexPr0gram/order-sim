import { useMemo } from "react"

const DEFAULT_HEADER = [
    {
        id: 'managerName',
        caption: 'Имя менеджера'
    },
    {
        id: 'address',
        caption: 'Адрес'
    },
    {
        id: 'timeCreate',
        caption: 'Время создания'
    },
    {
        id: 'status',
        caption: 'Статус'
    }
]

export default(activeTab) => {
    return useMemo(() => {
        return DEFAULT_HEADER.filter((header) => {
            if (activeTab === 'new' || activeTab === 'completed') {
                return header.id !== 'status'
            }
            return header
        })
    }, [activeTab])
}