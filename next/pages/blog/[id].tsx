import { useRouter } from 'next/router';

const Id = () => {
    const router = useRouter();
    return (
        <div>{router.query.id}番のブログ</div>
    );
};

export default Id;
