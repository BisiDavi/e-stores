interface RatingProps {
    rate: number;
}

export default function Rating({ rate }: RatingProps) {
    const rateArray = new Array(rate).fill(0);
    const totalRate = new Array(5).fill(0);
    return (
        <div className="rating flex">
            <i className="far fa-star mx-1"></i>
        </div>
    );
}
