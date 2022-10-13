export const sendRequest = async (url) => { 
    const response = await fetch(`${url}`);
    if(response.ok)
    return await response.json();
    throw new Error('Failed to load data');
}

export const sendRepoRequest = async (url) => { 
    const response = await fetch(`${url}`);
    if(response.ok)
    return await response.json();
    throw new Error('Failed to load data');
}