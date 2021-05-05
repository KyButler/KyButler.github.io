import React, { useEffect, useState } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';

import Lily from '../assets/images/avatar-thumbnails/1 - Lily.png';
import SummerLily from '../assets/images/avatar-thumbnails/2 - Summer Lily.png';
import WinterLily from '../assets/images/avatar-thumbnails/3 - Winter Lily.png';
import SleepyLily from '../assets/images/avatar-thumbnails/4 - Sleepy Lily.png';
import SleepyLilyGiant from '../assets/images/avatar-thumbnails/5 - Giant Sleepy Lily.png';
import MeguminLily from '../assets/images/avatar-thumbnails/6 - Megumin Lily.png';

import AzukiLily from '../assets/images/avatar-thumbnails/19 - Azuki Lily.png';
import DripLily from '../assets/images/avatar-thumbnails/20 - Drip Lily.png';

function thumbnailFormatter(cell) {
    if (cell) {
        return (<Image src={cell} fluid />)
    }
}

function trueFalseFormatter(cell) {
    return cell ? 'Yes' : 'No'
}

const columns = [{
    dataField: 'name',
    sort: true,
    text: 'Avatar Name'
}, {
    dataField: 'thumbnail',
    formatter: thumbnailFormatter,
    headerStyle: (colum, colIndex) => {
        return { width: '250px', textAlign: 'center' };
    },
    sort: true,
    text: 'Thumbnail'
}, {
    dataField: 'isInSuva',
    formatter: trueFalseFormatter,
    sort: true,
    text: 'Ready for Stream?',
    style: (cell) => {
        if (!cell) {
            return {
                backgroundColor: '#901f22',
                color: 'white'
            }
        }
        else {
            return {
                backgroundColor: 'green',
                color: 'white'
            }
        }
    }
}, {
    dataField: 'isOnVRChat',
    formatter: trueFalseFormatter,
    sort: true,
    text: 'Is it on PC VRChat?',
    style: (cell, row, rowIndex, colIndex) => {
        if (!cell) {
            return {
                backgroundColor: '#901f22',
                color: 'white'
            }
        }
        else {
            return {
                backgroundColor: 'green',
                color: 'white'
            }
        }
    }
}, {
    dataField: 'isOnQuest',
    formatter: trueFalseFormatter,
    sort: true,
    text: 'Is it on Quest VRChat?',
    style: (cell, row, rowIndex, colIndex) => {
        if (!cell) {
            return {
                backgroundColor: '#901f22',
                color: 'white'
            }
        }
        else {
            return {
                backgroundColor: 'green',
                color: 'white'
            }
        }
    }
}, {
    dataField: 'isPublic',
    formatter: trueFalseFormatter,
    sort: true,
    text: 'Is it public?',
    style: (cell, row, rowIndex, colIndex) => {
        if (!cell) {
            return {
                backgroundColor: '#901f22',
                color: 'white'
            }
        }
        else {
            return {
                backgroundColor: 'green',
                color: 'white'
            }
        }
    }
}, {
    dataField: 'isinWorld',
    formatter: trueFalseFormatter,
    sort: true,
    text: 'Is it in the VRC World?',
    style: (cell, row, rowIndex, colIndex) => {
        if (!cell) {
            return {
                backgroundColor: '#901f22',
                color: 'white'
            }
        }
        else {
            return {
                backgroundColor: 'green',
                color: 'white'
            }
        }
    }
}, {
    dataField: 'version',
    sort: true,
    text: '3.0 or 2.0?'
}];

const columnsTwo = [{
    dataField: 'name',
    sort: true,
    text: 'Avatar Name'
}, {
    dataField: 'isInSuva',
    formatter: trueFalseFormatter,
    sort: true,
    text: 'Ready for Stream?',
    style: (cell) => {
        if (!cell) {
            return {
                backgroundColor: '#901f22',
                color: 'white'
            }
        }
        else {
            return {
                backgroundColor: 'green',
                color: 'white'
            }
        }
    }
}, {
    dataField: 'isOnVRChat',
    formatter: trueFalseFormatter,
    sort: true,
    text: 'Is it on PC VRChat?',
    style: (cell, row, rowIndex, colIndex) => {
        if (!cell) {
            return {
                backgroundColor: '#901f22',
                color: 'white'
            }
        }
        else {
            return {
                backgroundColor: 'green',
                color: 'white'
            }
        }
    }
}, {
    dataField: 'isOnQuest',
    formatter: trueFalseFormatter,
    sort: true,
    text: 'Is it on Quest VRChat?',
    style: (cell, row, rowIndex, colIndex) => {
        if (!cell) {
            return {
                backgroundColor: '#901f22',
                color: 'white'
            }
        }
        else {
            return {
                backgroundColor: 'green',
                color: 'white'
            }
        }
    }
}, {
    dataField: 'isPublic',
    formatter: trueFalseFormatter,
    sort: true,
    text: 'Is it public?',
    style: (cell, row, rowIndex, colIndex) => {
        if (!cell) {
            return {
                backgroundColor: '#901f22',
                color: 'white'
            }
        }
        else {
            return {
                backgroundColor: 'green',
                color: 'white'
            }
        }
    }
}, {
    dataField: 'isinWorld',
    formatter: trueFalseFormatter,
    sort: true,
    text: 'Is it in the VRC World?',
    style: (cell, row, rowIndex, colIndex) => {
        if (!cell) {
            return {
                backgroundColor: '#901f22',
                color: 'white'
            }
        }
        else {
            return {
                backgroundColor: 'green',
                color: 'white'
            }
        }
    }
}, {
    dataField: 'version',
    sort: true,
    text: '3.0 or 2.0?'
}];

const avatars = [
    {
        name: 'Lily',
        isInSuva: true,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        thumbnail: Lily,
        version: 3
    }, {
        name: 'Summer Lily',
        isInSuva: true,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        thumbnail: SummerLily,
        version: 3
    }, {
        name: 'Winter Lily',
        isInSuva: true,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        thumbnail: WinterLily,
        version: 3
    }, {
        name: 'Sleepy Lily',
        isInSuva: true,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        thumbnail: SleepyLily,
        version: 3
    }, {
        name: 'Sleepy Lily (Giant)',
        isInSuva: false,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        thumbnail: SleepyLilyGiant,
        version: 3
    }, {
        name: 'Megumin Lily',
        isInSuva: true,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        thumbnail: MeguminLily,
        version: 3
    }, {
        name: 'Azuki Lily',
        isInSuva: true,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        thumbnail: AzukiLily,
        version: 3
    }, {
        name: 'Drip Lily',
        isInSuva: true,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: false,
        isinWorld: false,
        thumbnail: DripLily,
        version: 3
    }, {
        name: 'Schoolgirl Lily',
        isInSuva: false,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        version: 2
    }, {
        name: 'Christmas Lily',
        isInSuva: false,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        version: 2
    }, {
        name: 'Schoolgirl Lily Poly-kon',
        isInSuva: false,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        version: 2
    }, {
        name: 'Birthday Lily',
        isInSuva: false,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        version: 2
    }, {
        name: 'Lilykyu',
        isInSuva: false,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        version: '2.5'
    }, {
        name: 'Swimsuit Lily',
        isInSuva: false,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        version: '2.5'
    }, {
        name: 'Suit Billy',
        isInSuva: false,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: false,
        isinWorld: true,
        version: '2'
    }, {
        name: 'Schoolboy Billy',
        isInSuva: false,
        isOnVRChat: true,
        isOnQuest: true,
        isPublic: true,
        isinWorld: true,
        version: '2'
    }]

const defaultSorted = [{
    dataField: 'name',
    order: 'asc'
}];

const AvatarList = () => {
    const [showThumbnail, setShowThumbnail] = useState(false);

    useEffect(() => {
        document.title = `KyButler's Site - Avatar List`;
    });

    return (
        <Container style={{ marginBottom: '1em', marginTop: '1em', fontFamily: 'Arial' }} fluid>
            <span>
                <Button onClick={() => setShowThumbnail(!showThumbnail)} style={{ marginBottom: '1em' }}>
                    {showThumbnail ? 'Hide Thumbnails' : 'Show Thumbnails'}
                </Button>
                <div>
                    Currently there are {avatars.length} avatars!
                </div>

            </span>


            <BootstrapTable
                bootstrap4
                bordered={false}
                columns={showThumbnail ? columns : columnsTwo}
                condensed
                data={avatars}
                defaultSorted={defaultSorted}
                keyField='name'
                striped />
        </Container>
    );

}

export default AvatarList;