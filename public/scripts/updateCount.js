let lastCount = 0;
setInterval(() => fetch('/count').then(resolve => {
    resolve.json().then(count => {
        if (lastCount < count) {
            const counter = document.getElementById('counter')
            counter.innerText = count
            counter.style.color = `#${Math.random().toString(16).substring(9)}`;
            lastCount = count
        }
    })

}), 1000)