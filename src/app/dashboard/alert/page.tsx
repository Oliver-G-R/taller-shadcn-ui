import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { RocketIcon, CheckCircledIcon, InfoCircledIcon } from "@radix-ui/react-icons"
export default function AlertPasge() {
  return (
    <div className="flex flex-col gap-5">

        <h1>
          Alerta de error
        </h1>
        
        <Alert variant="destructive">
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Algo paso mientras se realizaba la tarea.
          </AlertDescription>
        </Alert>

        <h1>
          Alerta de éxito
        </h1>
        
        <Alert variant="success">
          <CheckCircledIcon className="h-4 w-4" />
          <AlertTitle>Se completo</AlertTitle>
          <AlertDescription>
            Se completo la tarea de la semana.
          </AlertDescription>
        </Alert>

        <h1>
          Alerta de información
        </h1>
     
        <Alert variant="info">
          <InfoCircledIcon className="h-4 w-4" />
          <AlertTitle>Cambia tu contraseña</AlertTitle>
          <AlertDescription>
            Por favor cambia tu contraseña cada 6 meses.
          </AlertDescription>
        </Alert>
    </div>
  )
}
