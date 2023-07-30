const Modal = ({children, setIsOpenModal, titleModal}) => {
    return (
        <div onClick={()=>setIsOpenModal(false)}  className=' fixed top-0 left-0 right-0 bottom-0 m-auto bg-black bg-opacity-50 backdrop-filter backdrop-blur-md flex justify-center items-center z-50'>
            <div onClick={ (e)=> e.stopPropagation()} className='w-3/4 bg-white p-5 lg:p-12 relative rounded-md'>
                <div className='absolute right-2 top-2' onClick={()=>setIsOpenModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 hover:text-main-color">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className={'font-bold text-center'}>
                    <h1 className="text-2xl mb-4 text-main-color font-bold">{ titleModal }</h1>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;