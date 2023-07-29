let btn = document.getElementById('submit-btn');


if(localStorage.getItem('token'))
{
    const func = async () => {
        let a = await fetch('http://localhost:3000/api/auth/auto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            }
        })

        a = await a.json();

        if(a.success == true)
        {
            location.href = './template/signin.html';
        }
    }

    func();


}



btn.addEventListener('click', async (e) => {
    let email = document.getElementById('floatingInput').value;
    let password = document.getElementById('floatingPassword').value;
    
    let a = await fetch('http://localhost:3000/api/auth/createUser', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    })
    location.href = './template/signin.html';
})