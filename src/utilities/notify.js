import toast from 'react-hot-toast'
const notifySuccess = (message) => {
    toast.success(message)
}

const notifyError = (message) => {
    toast.error(message)
}

const notifyWarn = (message) => {
    toast(message, {
        icon: '⚠️',
        style: {
            border: '1px solid #facc15',
            color: '#92400e',
        },
    });
};


export { notifySuccess, notifyError, notifyWarn } 