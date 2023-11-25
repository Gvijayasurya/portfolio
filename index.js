function Login(e){
    let u = "vijay"
    let p = "123"
    let uname = e.target[0].value
    let pswd = e.target[1].value
     console.log(uname,pswd);
    e.preventDefault();

    let t = document.getElementsByTagName('span')

    if(uname === "" || uname === null)
    {
        let z = document.getElementsByName('uname')
        z[0].style.border="solid 2px red"
        t[0].innerText="This field is empty"
        t[0].style=`
        font-family:sans-serif;
        font-size: 12px;
        color: rgb(139, 13, 13);; 
        `
        return false;

    }
    else{
        if(uname == u && pswd == p)
        {
           window.location = 'PortHome.html';
           console.log("correct password");
       }
       else
       {
           let c = document.createElement('h6')
           let d = document.getElementById('txt')
           c.innerText="!Invalid cridentials"
           c.style.color="red"
           d.appendChild(c)
           
           console.log("Incorrect password");
           e.preventDefault();
       }
    }
}