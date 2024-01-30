<script>

    import { Button } from 'flowbite-svelte';

    import { UserCircleOutline } from 'flowbite-svelte-icons'
    //import { storecardstatus, storestringcard } from '../../store/store'

    import { storecardtitle, storecardcontent } from '../../store/store'

    import { push } from 'svelte-spa-router'


    let stringCardTitle;
    let stringCardContent;
    const username = window.localStorage.username

    storecardtitle.subscribe( title => { stringCardTitle = title} )
    storecardcontent.subscribe( content => { stringCardContent = content} )

    function showCard(title,content) {

     storecardtitle.set(title)
     storecardcontent.set(content)
    
   }

   function signup(){

    push('/signup')

   }

   function login(){

    push('/login')

   }

   function logout(){

    
    window.localStorage.removeItem("username")
    push('/')

   }
    

    // let cardstatus;
    // let stringCard;

    // storecardstatus.subscribe( val => { cardstatus = val} )
    // storestringcard.subscribe( val => { stringCard = val} )
    

    // function showCard(str) {

    //     storecardstatus.set(true)
    //     storestringcard.set(str)
        
    // }

    // const unShowCard = () => {

    //     storecardstatus.set(false)

    // }

</script>

<div class = "mt-12 ">

    <div class = "flex flex-row space-x-10 ">

        <!-- <div ><GradientButton shadow color="teal" > Login </GradientButton></div> -->

        { #if username === undefined }

        <div class = "text-lg right-72 fixed">
            
            <Button id="sign-up" shadow color="dark" on:mouseenter = { () =>  showCard("SignUp","Want to Register?") } on:click = { () => signup() } > Sign Up </Button> 
 
            
            
            
        </div>

        { :else }

        <div class = "text-lg right-96 font-bold fixed">
                        
            <p> {username} </p>             
            
        </div>

        {/if}

        <div class = "right-40 fixed">
            
            { #if username === undefined } <Button id="sign-in" shadow color="dark" on:mouseenter = { () => showCard("Login","Want to Sign into your account?") } on:click = { () => login() } > Login </Button> 

            { :else } <Button id="sign-in" shadow color="dark" on:mouseenter = { () => showCard("Logout","Want to Log out from your account?") } on:click = { () => logout() } > Logout </Button> 
            
            {/if}

        </div>

        
        <!-- <div></div> -->

        <div class = "right-8 fixed">
            
            { #if username === null } <UserCircleOutline id="sign-profile" shadow class = " w-10 h-10 cursor-pointer" on:mouseenter = { () => showCard("User Profile","View or edit your profile?") } > </UserCircleOutline> 
            
            { :else } <UserCircleOutline id="sign-profile" shadow class = " w-10 h-10 cursor-pointer" on:mouseenter = { () => showCard("User Profile","View or edit your profile?") } > </UserCircleOutline> 
            
            { /if }
            
        </div>

        

    </div>        

</div>

<!-- <div>

    {#if cardstatus === true}

        <Iconcard stringCard = { stringCard } /> 
        
    {/if}

</div> -->