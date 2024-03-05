interface ContainerProps {
    children: React.ReactNode
}

const Container = (props: ContainerProps) => {

    const { children } = props
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 px-12 py-20 md:py-40 max-w-3xl mx-auto mt-7">
            {children}
        </div>
    );
}



export default Container;

