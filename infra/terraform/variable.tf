variable "gcp_project" {
  
}

variable "gcp_region" {
  
}

variable "ssh_public_key" {
  description = "Public SSH key for authentication"
  type        = string
}

variable "gcp_svc_key" {
  description = "Google Cloud service account key file"
  type        = string
}