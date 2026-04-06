let canvas = document.getElementById("workspace-canvas");

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
}


initialize_webgpu()