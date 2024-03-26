<script>
    import { Router, Link, Route } from 'svelte-routing';
    import { getToken } from '@/users/store/auth.js'

    import Deeployr from '@/global/components/DeeployrLogo.svelte'
    import Home from '@/global/pages/Home.svelte'
    import Register from '@/users/pages/Register.svelte'
    import Login from '@/users/pages/Login.svelte'
    import MFA from '@/users/pages/MFA.svelte'
    import Logout from '@/users/pages/Logout.svelte'
    import Dashboard from '@/deploy/pages/Dashboard.svelte'

    export let url = '';

    let token = getToken()
</script>

<Router {url}>
    <header>
        <nav>
            <Link class='navlink' to='/'><Deeployr /></Link>
            {#if !token || token.length < 20}
            <Link class='navlink' to='/login'>Login</Link>
            <Link class='navlink' to='/register'>Register</Link>
            {:else}
            <Link class='navlink' to='/dashboard'>Dashboard</Link>
            <Link class='navlink' to='/logout'>Logout</Link>
            {/if}
        </nav>
    </header>
    <section>
        <Route path='/'><Home /></Route>
        {#if !token || token.length < 20}
        <Route path='/register'><Register /></Route>
        <Route path='/login'><Login /></Route>
        {:else}
        <Route path='/mfa'><MFA /></Route>
        <Route path='/logout'><Logout /></Route>
        <Route path='/dashboard'><Dashboard /></Route>
        {/if}
        <Route path="*">Not Found</Route>
    </section>
    <footer>
    </footer>
</Router>
