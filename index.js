//array to hold value that the user inputs
let Palindrome = []
let notPalindrome = []

//this creates a new list item using the users input
let addItem = function (id, word){
    //target specific unordered list by ID (Palindrom or notPalindrome)
    var ul = document.getElementById(id);
    //creates a list item
      var li = document.createElement("li");
      //setting the value of the list item
      li.setAttribute(id, word);
      li.appendChild(document.createTextNode(word));
      ul.appendChild(li);
}

let isPalindrome = function(){
      let data = document.getElementById("oscar").value;
        let length = data.length;
        let bsWord = ''
        
        while(length){
            bsWord+= data[length-1]
            length-=1
        }
        //console.log(bsWord)
        if(data === bsWord){
            Palindrome.push(data)
            addItem('Palindrome', data)
            alert("Yes, " + data + " is a Palindrome!!!")
        }else{ 
            notPalindrome.push(data)
            addItem('notPalindrome', data)
            alert("Sorry, " + data + " is NOT Palindrome!!!")
        }
        console.log(Palindrome)
        console.log(notPalindrome)
<<<<<<< HEAD
    } 
=======
    }
>>>>>>> f022629270c7ee0a99699c5f1b451a20df758783
