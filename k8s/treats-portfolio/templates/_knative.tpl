{{- define "knative-service" -}}
kind: Service
apiVersion: serving.knative.dev/v1
metadata:
  name: {{ include "treats-portfolio.fullname" . }}
  labels:
  {{- include "treats-portfolio.labels" . | nindent 4 }}
  annotations:
    networking.knative.dev/httpOption: "redirected"
spec:
  template:
    spec:
      containers:
        - image: {{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}
{{- end}}