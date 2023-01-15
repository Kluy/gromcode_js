export const TOGGLE = 'OPTIONS/TOGGLE';

export const moveOption = (id) => {
    return {
        type: TOGGLE,
        payload: {
            id,
        }
    }
}