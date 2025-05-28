import useTitle from "../title/useTitle";

const TitleProvider = ({ title, children }) => {
    useTitle(title)
    return children
};

export default TitleProvider;