import {
    Table,
    Badge,
    Group,
    Modal,
    Avatar,
    Container,
    Title,
    Input,
    Text
  } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { HiMiniInformationCircle } from "react-icons/hi2";

function NameManagerCellTemplate(props) {
    const {item} = props;
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <Table.Td>
            <Modal opened={opened} onClose={close} title="Информация о менеджере" centered>
                <Group >
                    <Avatar variant="filled" radius="xl" size="lg" src="" />
                    <div className='flex-col'>
                        <Text size="md">Марина Иванова</Text>
                        <Text size="md">23 года</Text>
                    </div>
                </Group>
                <Input.Wrapper label="Личный телефон">
                    <Text size="sm">+7 999 456 12-12</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Филиал">
                    <Text size="sm">Тюменская обл., Тюмень, Газовиков 35</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Телефон филиала">
                    <Text size="sm">+7 (3452) 50‒07‒65</Text>
                </Input.Wrapper>
            </Modal>
            <Group gap="lg">
                {item.manager.name}
                <HiMiniInformationCircle className='cursor-pointer' onClick={open} />
            </Group>
        </Table.Td>
    )
}

export default NameManagerCellTemplate;


    // "start": "concurrently \"cd server && python3 main.py\" \"vite\""