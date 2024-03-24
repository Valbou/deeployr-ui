<script>
    import { Router, Link, Route } from 'svelte-routing';
    import { getToken } from './store/auth.js'

    import Deeployr from './lib/DeeployrLogo.svelte'
    import Home from './pages/Home.svelte'
    import Register from './pages/Register.svelte'
    import Login from './pages/Login.svelte'
    import MFA from './pages/MFA.svelte'
    import Dashboard from './pages/Dashboard.svelte'

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
        <Route path='/dashboard'><Dashboard /></Route>
        {/if}
        <Route path="*">Not Found</Route>
    </section>
    <footer>
    </footer>
</Router>
