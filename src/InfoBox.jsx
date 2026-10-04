import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
      return (
        <>
  <div className="card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>{info.city}</h3>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component = {"span"}>
          <p>Temperature: {info.temp}&deg;C</p>
          <p>Max-temperature: {info.tempMax}&deg;C</p>
          <p>Min-temperature: {info.tempMin}&deg;C</p>
          <p>Humidity: {info.humidity}</p>
          <p>The weather feels like {info.feelsLike}&deg;C and is described as {info.description}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </>
  );
}