let mode = "dark";
        function switchMode() {
            if (mode === "dark") {
                mode = "light";
        
                document.body.style.backgroundImage = 'linear-gradient(135deg, hsla(280, 27%, 13%, 1) 0%, hsla(195, 81%, 15%, 1) 99%)';
                document.body.style.color = 'rgb(245, 245, 245)';
                
                // document.getElementById('mode').style.filter = 'invert()';
                
                document.getElementById('avatar').style.filter = 'invert()';
                document.getElementById('connect').style.color = 'rgb(245, 245, 245)';
                document.getElementById('progressBar').style.filter = "invert()";        
                
                document.getElementById('switchMode').innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17Z" stroke="#000000" stroke-width="1.5"></path></svg>';
                document.getElementById('switchMode').style.filter = "invert()";

                // handling buttons background
                document.getElementById('project-para').style.color = "#ffffffa1"
                
            } else {
                mode = "dark";
                
                // frames border
                document.getElementById('switchMode').style.filter = "none";
                document.getElementById('switchMode').innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17Z" stroke="#000000" stroke-width="1.5"></path></svg>';
                //handling icon
                document.body.style.backgroundImage = "linear-gradient(135deg, hsla(280, 100%, 92%, 1) 0%, hsla(194, 33%, 90%, 1) 100%)";
                document.body.style.color = "#000000";
                
    
                document.getElementById('connect').style.color = "#000000";
                document.getElementById('avatar').style.filter = "none";
                
                
                //handling icon
                document.getElementById('progressBar').style.filter = "none";
                
                // handling paragraph color
                document.getElementById('project-para').style.color = "#272727ad"

                
            }
        }