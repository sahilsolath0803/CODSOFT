let string = "0";
let buttons = document.querySelectorAll(".boxes");
document.querySelector('input').value = string;
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let len = string.length;
        if(e.target.innerHTML == '=')
        {
            let len = string.length;
            if(string[len-1] == '+' || string[len-1] == '-' || string[len-1] == '/' || string[len-1] == '*')
            {
                string = string.slice(0, len-1);
            }
            string = eval(string);
        }
        else if(e.target.innerHTML == 'C')
        {
            string = '0';
        }
        else if(e.target.innerHTML == 'DEL')
        {
            string = string.slice(0, len-1);
            if(string.length == 0)
                string = '0';
        }
        else if(e.target.innerHTML == 'X')
        {
            if(string[len-1] == '+' || string[len-1] == '-' || string[len-1] == '/' || string[len-1] == '*')
            {
                string = string.slice(0, len-1);
            }
            string += '*';
        }
        else if(e.target.innerHTML == '+')
        {
            if(string[len-1] == '+' || string[len-1] == '-' || string[len-1] == '/' || string[len-1] == '*')
            {
                string = string.slice(0, len-1);
            }
            string += '+';
        }
        else if(e.target.innerHTML == '-')
        {
            if(string[len-1] == '+' || string[len-1] == '-' || string[len-1] == '/' || string[len-1] == '*')
            {
                string = string.slice(0, len-1);
            }
            string += '-';
        }
        else if(e.target.innerHTML == '%')
        {
            if(string)
            {
                string += '*(1/100)';
                string = eval(string);
            }
        }
        else if(e.target.innerHTML == '/')
        {
            if(string[len-1] == '+' || string[len-1] == '-' || string[len-1] == '/' || string[len-1] == '*')
            {
                string = string.slice(0, len-1);
            }
            string += '/';
        }
        else
        {
            if(string == '0')
                string = '';
            string += e.target.innerHTML;
        }
        document.querySelector('input').value = string;
    })
})