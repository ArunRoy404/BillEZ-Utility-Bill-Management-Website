import toast from 'react-hot-toast'
const notifySuccess = (message) =>{
    toast.success(message)
}

const notifyError = (message) =>{
    toast.error(message)
}

export {notifySuccess, notifyError}