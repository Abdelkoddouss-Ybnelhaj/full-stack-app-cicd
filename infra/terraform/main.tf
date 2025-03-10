
resource "google_compute_instance" "vm_instance" {
  name         = "my-vm-instance"
  machine_type = "e2-small"
  zone         = "${var.gcp_region}-a"
  
  # Define the SSH public key for the VM
  metadata = {
    ssh-keys = "abdelkdoussebelhaje:${file(var.ssh_public_key)}"
  }

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11" # Image family
    }
  }

   tags = ["http-server", "https-server"]

  network_interface {
    network = "default"
    access_config {
      # This block is required to assign a public IP
    }
  }

}

output "vm_ip" {
  value = google_compute_instance.vm_instance.network_interface[0].access_config[0].nat_ip
}