import User from '../components/user'

class Header {
    constructor(){}
    getHtml(){  
    let header = 'Init header'
    console.log(header);
    return `<header>Header - Wait for it</header>`;
}
}

export default Header

// class Header {
//     constructor(){}
//     getHtml(){  
//     let header = 'Init header'
//     console.log(header);
//     return `<header>Header${User.getUser()}</header>`;
// }
// }