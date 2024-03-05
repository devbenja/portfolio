interface ContainerProps {
    children: React.ReactNode
}

const Container = (props: ContainerProps) => {

    const { children } = props
    return (
        <div className="flex justify-between items-center px-12 py-20 md:py-40 max-w-3xl mx-auto">
            {children}
        </div>
    );
}



export default Container;

