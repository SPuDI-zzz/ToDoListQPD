export default async function fetchApi<TResponse>(url: string, config?: RequestInit): Promise<TResponse> {
    return fetch(url, config)
    .then(response => response.json())
    .then(responseJson => responseJson as TResponse);
}
