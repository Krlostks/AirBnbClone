const apiService = {
    get: async function (url: string): Promise<any> {
        console.log('get', url);

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {  
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('Response:', typeof json);
                    resolve(json);
                })
                .catch(( response) => {  
                    console.log('Responseee:', typeof response);
                    reject(response);  
                });
        });
    }
};

export default apiService;