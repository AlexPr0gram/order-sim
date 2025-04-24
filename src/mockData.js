export const data = [
    {
      id: crypto.randomUUID(),
      manager: {
        id: crypto.randomUUID(),
        name: 'Мария Иванова',
        number: '89261234567'
      },
      adresse: {
        loaction: 'ул. Ленина, 10',
        caption: 'г. Самара, ул. Ленина, д. 10, кв. 12'
      },
      timeCreate: Date.now() - 1000 * 60 * 60 * 5, // 5 часов назад
      status: 2
    },
    {
      id: crypto.randomUUID(),
      manager: {
        id: crypto.randomUUID(),
        name: 'Игорь Смирнов',
        number: '89101231231'
      },
      adresse: {
        loaction: 'пр. Мира, 20',
        caption: 'г. Омск, проспект Мира, д. 20'
      },
      timeCreate: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 дня назад
      status: 1
    },
    {
      id: crypto.randomUUID(),
      manager: {
        id: crypto.randomUUID(),
        name: 'Светлана Кузнецова',
        number: '89051112233'
      },
      adresse: {
        loaction: 'ул. Пушкина, 3',
        caption: 'г. Казань, ул. Пушкина, д. 3'
      },
      timeCreate: Date.now() - 1000 * 60 * 30, // 30 минут назад
      status: 2
    },
    {
      id: crypto.randomUUID(),
      manager: {
        id: crypto.randomUUID(),
        name: 'Дмитрий Орлов',
        number: '89005556677'
      },
      adresse: {
        loaction: 'наб. реки Фонтанки, 25',
        caption: 'СПб, наб. реки Фонтанки, д. 25'
      },
      timeCreate: Date.now() - 1000 * 60 * 60 * 8, // 8 часов назад
      status: 1
    }
  ];
