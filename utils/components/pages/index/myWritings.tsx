import { ArrowCircleRight } from '@mui/icons-material';
import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react'
import mediumApiCall from '../../../controller/apiCall/mediumApiCall'
import { randomNumberGenerator } from '../../../functions/common';
import CommonDivider from '../../common/commonDivider'

export default function MyWritings({ data }) {

    const [mediumArticles, setMediumArticles] = useState(null);

    const fetchMediumArticles = useCallback(async () => {

        const res = await mediumApiCall();

        const from = randomNumberGenerator(res.length - 3);
        const to = from + 3;

        setMediumArticles(res.slice(from, to));

    }, [setMediumArticles]);

    useEffect(() => {
        fetchMediumArticles();
        console.log(mediumArticles);
    }, [fetchMediumArticles])

    const setGridSize = (mediumArticles) => {

        return mediumArticles.length;
    }

    return (

        mediumArticles
            ? <>
                <br />
                <Typography variant="h4" color="text.primary">
                    {data.title}
                </Typography>
                <br />
                <ImageList cols={setGridSize(mediumArticles)}>
                    {
                        mediumArticles.map((article) => <SingleArticle article={article} />)
                    }
                </ImageList>
                <CommonDivider />
                <br />
            </>
            : null


    );
}

function SingleArticle({ article }) {

    return (
        <Link  href={article.link} target="_blank" rel="noopener">
            <ImageListItem
                key={article.thumbnail}
                style={{ cursor: "pointer" }}>
                <img
                    src={article.thumbnail}
                    alt={article.thumbnail}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={article.title}
                    actionIcon={
                        <IconButton sx={{ color: 'rgba(255, 255, 255, 1)' }}>
                            <ArrowCircleRight />
                        </IconButton>
                    }
                />
            </ImageListItem>
        </Link>
    );
}
