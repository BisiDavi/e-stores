interface RatingProps {
    rate: number;
}

export default function Rating({ rate }: RatingProps) {
    const starredRate = new Array(rate).fill(0);
    const totalStarredRate = new Array(5).fill(0);
    const unfilledRateLength = Number(
        totalStarredRate.length - starredRate.length,
    );
    const unfilledStarredRate = new Array(unfilledRateLength).fill(0);

    return (
        <div className="rating flex items-center my-3 ml-0">
            {starredRate.map((_, index) => (
                <i key={index} className="fas mr-2 fa-star text-yellow-500"></i>
            ))}
            {unfilledStarredRate.length > 0 &&
                unfilledStarredRate.map((_, index) => (
                    <i
                        key={index}
                        className="far fa-star mr-2 text-gray-100"
                    ></i>
                ))}
        </div>
    );
}
