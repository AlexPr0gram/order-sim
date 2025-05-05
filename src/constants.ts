export const STATUS_TYPE = {
    1: 'new',
    2: 'completed',
    3: 'other'
}

export const STATUS_CODE = Object.fromEntries(
    Object.entries(STATUS_TYPE).map(([key, value]) => [value, Number(key)])
);