// This is where we define our micro applications
const microApps = [
    {
        name: 'reactapp',
        entry: '//localhost:7100',
        activeRule: '/reactapp'
    },
    {
        name: 'vue',
        entry: '//localhost:7777/vueapp',
        activeRule: '/vueapp'
    }
];

const apps = microApps.map((item) => {
    return {
        ...item,
        // this will be the element where the micro application will be in
        container: "#subapp-viewport",
        props: {
            routerBase: item.activeRule,
        },
    };
});

export default apps;