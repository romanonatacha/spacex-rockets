import React from 'react'
import '../styles.css'
import 'isomorphic-fetch'
import Layout from '../components/Layout'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import image1 from '../static/images/spacex-1.jpg'
import image2 from '../static/images/spacex-2.jpg'
import image3 from '../static/images/spacex-3.jpg'
import image4 from '../static/images/spacex-4.jpg'
import image5 from '../static/images/spacex-5.jpg'
import image6 from '../static/images/spacex-6.jpg'
import image7 from '../static/images/spacex-7.jpg'
import image8 from '../static/images/spacex-8.jpg'
import image9 from '../static/images/spacex-9.jpg'



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}))

const tileData = [
    {
        img: image1,
        title: 'spacex-image',
        author: 'author',
        cols: 2
    },
    {
        img: image2,
        title: 'spacex-image',
        author: 'author',
        cols: 1
    },
    {
        img: image3,
        title: 'spacex-image',
        author: 'author',
        cols: 1
    },
    {
        img: image4,
        title: 'spacex-image',
        author: 'author',
        cols: 2
    },
    {
        img: image5,
        title: 'spacex-image',
        author: 'author',
        cols: 3
    },
    {
        img: image6,
        title: 'spacex-image',
        author: 'author',
        cols: 2
    },
    {
        img: image7,
        title: 'spacex-image',
        author: 'author',
        cols: 1
    },
    {
        img: image8,
        title: 'spacex-image',
        author: 'author',
        cols: 1
    },
    {
        img: image9,
        title: 'spacex-image',
        author: 'author',
        cols: 2
    }
]

const Home = ({ data }) => {
    const classes = useStyles()
        return (
            <Layout>
                <div className={classes.root}>
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {tileData.map(tile => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
        </Layout>
    )
}

Home.getInitialProps = async () => {
    const res = await fetch('https://api.spacexdata.com/v2/launches')
    const data = await res.json()

    console.log(data)

    return { data }
    
}

export default Home