# Generated by Django 2.1.4 on 2019-08-28 13:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('races', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='race',
            name='circuitId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='circuits.Circuit'),
        ),
    ]