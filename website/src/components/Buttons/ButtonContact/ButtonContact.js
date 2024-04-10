import {Button} from 'antd'

function ButtonContact (){

    return (
        <Button type='default' style={{
            border: 'none',
            borderRadius: "10px",
            padding: '20px 30px !important',
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Nunito, sans-serif',
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"

        }}> Contato </Button>
    )
}

export default ButtonContact