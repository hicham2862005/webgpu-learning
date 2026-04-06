// the function that checks the support of the webgpu interface on the browser
async function initialize_webgpu()
{
    if(!navigator.gpu) {
        throw Error("WebGPU are not supported in this browser");
    }

    let adapter;

    try {
        adapter = await navigator.gpu.requestAdapter()
    } catch(error)
    {
        console.error(error)
    }

    if(!adapter)
    {
        throw Error("Couldn't find WebGPU Adapter")
    }

    let device = adapter.requestDevice()

    if(!device)
    {
        throw Error("No Devices are available")
    }

    return device
}

// getting the current logical gpu device the will be used for the rendering calculations
let device = initialize_webgpu()
console.log(device)
